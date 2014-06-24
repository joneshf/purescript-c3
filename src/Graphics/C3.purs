module Graphics.C3
  ( C3()
  , Options()
  , C3Data(..)
  , C3Type(..)
  , Axis()
  , XDim()
  , YDim()
  , generate
  , c3Data
  , options
  , xAxis
  , yAxis
  ) where

  import Control.Monad.Eff
  import DOM

  foreign import data C3 :: *

  data Axis dim = Axis String String [String]
  data XDim = XDim
  data YDim = YDim

  data C3Type = Bar
              | Line
              | Pie

  instance showC3Type :: Show C3Type where
    show Bar  = "bar"
    show Line = "line"
    show Pie  = "pie"

  instance eqC3Type :: Eq C3Type where
    (==) Bar  Bar  = true
    (==) Line Line = true
    (==) Pie  Pie  = true
    (==) _    _    = false

    (/=) t    t'   = not (t == t')

  type C3Data =
    { values :: [Number]
    , name   :: String
    , c3Type :: C3Type
    }
  type Options =
    { bindto :: String
    , c3Data :: [C3Data]
    , xAxis :: Axis XDim
    , yAxis :: Axis YDim
    }

  options :: Options
  options =
    { bindto: ""
    , c3Data: []
    , xAxis: xAxis "" []
    , yAxis: yAxis "" []
    }
  c3Data :: C3Data
  c3Data =
    { c3Type: Bar
    , name: ""
    , values: []
    }

  xAxis :: String -> [String] -> Axis XDim
  xAxis = Axis "x"

  yAxis :: String -> [String] -> Axis YDim
  yAxis = Axis "y"

  axisName :: forall dim. Axis dim -> String
  axisName (Axis _ name _) = name

  axisData :: forall dim. Axis dim -> [String]
  axisData (Axis _ _ ds) = ds

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
    \  if (axisName(opts.xAxis) !== '') {\
    \    obj = insertAxis(obj)(opts.xAxis);\
    \  }\
    \  if (axisName(opts.yAxis) !== '') {\
    \    obj = insertAxis(obj)(opts.yAxis);\
    \  }\
    \  return obj;\
    \}" :: Options -> ActualOptions

  foreign import insertAxis
    "function insertAxis(opts) {\
    \  return function(axis) {\
    \    var xData = axisData(axis);\
    \    opts.data.x = axisName(axis);\
    \    opts.data.columns.unshift([opts.data.x].concat(xData));\
    \    opts.axis = opts.axis || {};\
    \    opts.axis.x = {\
    \      type: 'category',\
    \      tick: {\
    \        format: function(i) {\
    \          return xData[i];\
    \        }\
    \      }\
    \    };\
    \    return opts;\
    \  }\
    \}" :: forall dim. ActualOptions -> Axis dim -> ActualOptions

  foreign import c3Types
    "function c3Types(opts) {\
    \  var obj = {};\
    \  opts.c3Data.forEach(function(d) {\
    \    obj[d.name] = showC3Type_(d.c3Type);\
    \  });\
    \  return obj;\
    \}" :: forall r. Options -> { | r}
