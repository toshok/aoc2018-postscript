/counter 0 def

/src (1.data)(r)file def
{
    /str 80 string def
    src str readline {
      /delta str cvi def
      /counter counter delta add store
    }{
       pop exit
    } ifelse
} loop

(%stdout)(w)file counter 8 string cvs writestring
(%stdout)(w)file (\n) writestring
