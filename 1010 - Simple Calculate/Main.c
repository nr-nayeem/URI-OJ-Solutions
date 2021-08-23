#include <stdio.h>

int main()
{
    int code1, units1, code2, units2;
    double ppu1, ppu2;
    scanf("%d %d %lf %d %d %lf", &code1, &units1, &ppu1, &code2, &units2, &ppu2);
    printf("VALOR A PAGAR: R$ %0.2lf\n", units1 * ppu1 + units2 * ppu2);
    return 0;
}