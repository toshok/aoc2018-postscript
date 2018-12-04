/counter 0 def

/seen 1000 dict def

seen 0 8 string cvs cvn true put

/src (2.data)(r)file def
{
    /str 80 string def
    src str readline {
      /delta str cvi def
      /counter counter delta add store

      /counterstr counter 8 string cvs def
      /countername counterstr cvn def

      % (%stdout)(w)file counterstr writestring
      % (%stdout)(w)file (\n) writestring

      seen countername known {
        (%stdout)(w)file counterstr writestring
        (%stdout)(w)file (\n) writestring
        pop exit
      }{
        seen countername true put pop
      } ifelse
    }{
       % (%stdout)(w)file (didn't see a repeating state?\n) writestring
       pop

       % reinitialize src so we start reading from the file anew, with existing counter+seen
       /src (2.data)(r)file store
    } ifelse
} loop
