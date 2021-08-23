n, c = [int(i) for i in input().split('.')]
print('NOTAS:')
print(f'{n // 100} nota(s) de R$ 100.00')
n %= 100
print(f'{n // 50} nota(s) de R$ 50.00')
n %= 50
print(f'{n // 20} nota(s) de R$ 20.00')
n %= 20
print(f'{n // 10} nota(s) de R$ 10.00')
n %= 10
print(f'{n // 5} nota(s) de R$ 5.00')
n %= 5
print(f'{n // 2} nota(s) de R$ 2.00')
n %= 2
print('MOEDAS:')
print(f'{n} moeda(s) de R$ 1.00')
print(f'{c // 50} moeda(s) de R$ 0.50')
c %= 50
print(f'{c // 25} moeda(s) de R$ 0.25')
c %= 25
print(f'{c // 10} moeda(s) de R$ 0.10')
c %= 10
print(f'{c // 5} moeda(s) de R$ 0.05')
c %= 5
print(f'{c} moeda(s) de R$ 0.01')