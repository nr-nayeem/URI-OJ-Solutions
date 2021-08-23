#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    printf("%d:", n / 3600);
    n %= 3600;
    printf("%d:%d\n", n / 60, n % 60);
    return 0;
}