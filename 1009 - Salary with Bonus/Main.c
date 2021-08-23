#include <stdio.h>

int main()
{
    char name[10];
    gets(name);
    double salary, sold_amount;
    scanf("%lf %lf", &salary, &sold_amount);
    printf("TOTAL = R$ %0.2lf\n", salary + sold_amount * 0.15);
    return 0;
}