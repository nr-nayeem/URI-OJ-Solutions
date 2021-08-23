#include <stdio.h>

int main()
{
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);
    if (a > b)
    {
        b = a;
    }
    printf("%d eh o maior\n", c > b ? c : b);
    return 0;
}