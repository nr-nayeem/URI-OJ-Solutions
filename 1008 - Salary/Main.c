#include <stdio.h>

int main()
{
    int num, hpm;
    double mph;
    scanf("%d %d %lf", &num, &hpm, &mph);
    printf("NUMBER = %d\n", num);
    printf("SALARY = U$ %0.2lf\n", hpm * mph);
    return 0;
}