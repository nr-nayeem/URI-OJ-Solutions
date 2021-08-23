#include <stdio.h>

int main()
{
    int ih, im, fh, fm;
    scanf("%d %d %d %d", &ih, &im, &fh, &fm);
    int tm = (fh - ih) * 60 + fm - im;
    if (tm < 1)
    {
        tm += 1440;
    }
    printf("O JOGO DUROU %d HORA(S) E %d MINUTO(S)\n", tm / 60, tm % 60);
    return 0;
}