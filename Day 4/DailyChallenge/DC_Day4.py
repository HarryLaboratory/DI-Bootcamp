matrix = [
    "7ii",
    "Tsx",
    "h%?",
    "i #",
    "sM ",
    "$a ",
    "#t%",
    "^r!"
]

def decode_matrix(*args, **kwargs):

    ignore_non_alpha = kwargs.get('ignore_non_alpha', True)
    
    final_message = ""
    
    num_columns = len(args[0])
    
    for col in range(num_columns):
        for row in args:
            final_message += row[col] if row[col].isalpha() or not ignore_non_alpha else ' '
    
    return final_message

final_message = decode_matrix(*matrix, ignore_non_alpha=True)
print(final_message)
