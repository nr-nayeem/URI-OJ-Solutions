n = int(input())
print(n // 3600, end=":")
n %= 3600
print(f'{n // 60}:{n % 60}')