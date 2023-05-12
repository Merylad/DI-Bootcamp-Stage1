positions = {
    'X' : set (),
    'O' : {(0, 1), (1, 2), (2, 1), (1, 1), (1, 0)}
    }

row = {(0, 1), (1, 1), (2, 1)}

print (row.issubset(positions['O']))
