x=1
while [ $x -le 100 ]
  do
    curl localhost:3000
    x=$(( $x + 1 ))
  done
