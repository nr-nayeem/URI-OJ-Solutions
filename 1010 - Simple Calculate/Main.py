code, units1, ppu1 = input().split()
code, units2, ppu2 = input().split()
print(f'VALOR A PAGAR: R$ {int(units1) * float(ppu1) + int(units2) * float(ppu2):.2f}')
