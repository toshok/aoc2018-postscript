/counter2 0 def
/counter3 0 def

/src (2.data)(r)file def
{
    /str 80 string def
    src str readline {
      /letterCounts 100 dict def
      str {
       5 string cvs cvn /letterName exch def
       letterCounts letterName known {
         letterCounts letterName 1 letterCounts letterName get add put
       }{
         letterCounts letterName 1 put
       } ifelse
      } forall

      /has2 false def
      /has3 false def

      letterCounts {
        /count exch def
        pop % get rid of the key
        2 count eq { /has2 true store } if
        3 count eq { /has3 true store } if
      } forall

      has2 { /counter2 counter2 1 add store } if
      has3 { /counter3 counter3 1 add store } if
    }{
       (%stdout)(w)file counter2 counter3 mul 100 string cvs writestring
       (%stdout)(w)file (\n) writestring
       pop exit
    } ifelse
} loop

