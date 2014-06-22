# Module Documentation

## Module Graphics.C3

### Types

    data C3 :: *

    data C3Type where
      Bar :: C3Type
      Line :: C3Type
      Pie :: C3Type

    type Options  = { c3Data :: [{ c3Type :: C3Type, name :: String, values :: [Number] }], bindto :: String }


### Type Class Instances

    instance showC3Type :: Show C3Type


### Values

    generate :: forall eff. Options -> Eff (dom :: DOM | eff) C3

    options :: Options



