module Examples.Graphics.C3.Line where

  import Graphics.C3

  lineData1 = { values: [30, 200, 100, 400, 150, 250]
              , name: "data1"
              , c3Type: Pie
              }
  lineData2 = { values: [50, 20,  10,  40,  15,  25]
              , name: "data2"
              , c3Type: Pie
              }

  lineData = [lineData1, lineData2]

  opts = options{bindto = "#chart", c3Data = lineData}

  main = generate opts
