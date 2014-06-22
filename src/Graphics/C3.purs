module Graphics.C3
  ( C3()
  , Options()
  , C3Type(..)
  , generate
  , options
  ) where

  import Control.Monad.Eff
  import DOM

  foreign import data C3 :: *

  data C3Type = Bar
              | Line
              | Pie

  instance showC3Type :: Show C3Type where
    show Bar  = "bar"
    show Line = "line"
    show Pie  = "pie"

  type Options =
    { bindto :: String
    , c3Data :: [{ values :: [Number]
                 , name   :: String
                 , c3Type :: C3Type
                 }
                ]
    }

  options :: Options
  options =
    { bindto: ""
    , c3Data: []
    }

  foreign import generate
    "function generate(opts) {\
    \  return function() {\
    \    return c3.generate(actualOptions(opts));\
    \  }\
    \}" :: forall eff. Options -> Eff (dom :: DOM | eff) C3

  -- | ffi helpers
  showC3Type_ :: C3Type -> String
  showC3Type_ = show

  foreign import data ActualOptions :: *

  foreign import actualOptions
    "function actualOptions(opts) {\
    \  var obj = {};\
    \  obj.bindto = opts.bindto;\
    \  obj.data = {\
    \    columns: opts.c3Data.map(function(d) {\
    \      return [d.name].concat(d.values);\
    \    }),\
    \    types: c3Types(opts)\
    \  };\
    \  return obj;\
    \}" :: Options -> ActualOptions

  foreign import c3Types
    "function c3Types(opts) {\
    \  var obj = {};\
    \  opts.c3Data.forEach(function(d) {\
    \    obj[d.name] = showC3Type_(d.c3Type);\
    \  });\
    \  return obj;\
    \}" :: forall r. Options -> { | r}
