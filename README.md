# Module Documentation

## Module Graphics.C3

### Types

    data Axis dim

    data C3 :: *

    type C3Data  = { c3Type :: C3Type, name :: String, values :: [Number] }

    data C3Type where
      Bar :: C3Type
      Line :: C3Type
      Pie :: C3Type

    type Options  = { yAxis :: Axis YDim, xAxis :: Axis XDim, c3Data :: [C3Data], bindto :: String }

    data XDim

    data YDim


### Type Class Instances

    instance eqC3Type :: Eq C3Type

    instance showC3Type :: Show C3Type


### Values

    c3Data :: C3Data

    generate :: forall eff. Options -> Eff (dom :: DOM | eff) C3

    options :: Options

    xAxis :: String -> [String] -> Axis XDim

    yAxis :: String -> [String] -> Axis YDim



