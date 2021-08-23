n = int(input())
print(f'{n // 365} ano(s)')
n %= 365
print(f'{n // 30} mes(es)')
print(f'{n % 30} dia(s)')
