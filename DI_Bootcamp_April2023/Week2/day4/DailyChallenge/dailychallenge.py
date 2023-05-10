matrix = [
    ['7','i','3'],
    ['T','s','i'],
    ['h','%','x'],
    ['i',' ','#'],
    ['s','M',' '],
    ['$','a',' '], 
    ['#','t','%'],
    ['^','r','!']
]


def decrypt_matrix(mat):

    sentence = ""
    previous = ''

    for col in range(len(mat[0])):
        for row in mat:
            if row[col].isalpha() == True:
                sentence += row[col]
            elif row[col].isalpha() == False and previous.isalpha() == False :
                pass
            else :
                sentence+= ' '
            previous = row[col]

    return sentence



print(decrypt_matrix(matrix))







    

# matrix[0][0]
# matrix[1][0]
# matrix[2][0]

# matrix[0][1]
# matrix[1][1]
# matrix[2][1]

# colonne = v
# for i in range(len(matrix)) :
#     print (matrix[i][colonne])

# for v in range(len(matrix[0]))

# matrix[0][2]
# matrix[1][2]
# matrix[2][2]

