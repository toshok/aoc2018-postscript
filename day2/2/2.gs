/stdout (%stdout)(w)file def
/consoleLog { { stdout exch writestring } forall } bind def

% gather all strings in the file in an array
/len 0 def
/src (2.data)(r)file def
{
    /str 80 string def
    src str readline {
      /len 1 len add store
    }{
      len array astore /strings exch def
      pop exit
    } ifelse
} loop

  [(There are:) strings length 80 string cvs ( strings \n)] consoleLog

% outer loop
0 1 len 1 sub {
  dup /firstStrIndex exch def
  % [(outer ) firstStrIndex 80 string cvs ( ) strings firstStrIndex get (\n)] consoleLog
  firstStrIndex 1 add 1 len 1 sub {
    dup /secondStrIndex exch def

    % [(inner ) secondStrIndex 80 string cvs ( ) strings secondStrIndex get (\n)] consoleLog

    % compare the two strings and count their differences
    /str1 strings firstStrIndex get def
    /str2 strings secondStrIndex get def

    str1 length str2 length ne {
     %  [(DIFFERENT LENGTH STRINGS\n) str1 length 80 string cvs (\n) str2 length 80 string cvs (\n)] consoleLog
    }{

    /differences 0 def
    /compareOut 80 string def
    /compareIdx 0 def
    0 1 str1 length 1 sub {
      /index exch def
      % [(comparing ) index 80 string cvs] consoleLog
      /ch1 str1 index get def
      /ch2 str2 index get def

      ch1 ch2 eq {
       %  [( equal\n)] consoleLog
        compareOut compareIdx ch1 put
        /compareIdx compareIdx 1 add store
      }{
        % [( differ\n)] consoleLog
        /differences differences 1 add store
      } ifelse
    } for
    % [(differences: ) differences 80 string cvs (\n)] consoleLog
    pop

    differences 1 eq {
      [(WE DID IT\n) compareOut (\n)] consoleLog

      
      % loop over the two strings again, outputing the characters that are the same
      exit
    } if

    } ifelse

  } for
  pop
} for
pop

