ih, im, fh, fm = map(int, input().split())
tm = (fh - ih) * 60 + fm - im
if tm < 1:
    tm += 1440
print(f'O JOGO DUROU {tm // 60} HORA(S) E {tm % 60} MINUTO(S)')
