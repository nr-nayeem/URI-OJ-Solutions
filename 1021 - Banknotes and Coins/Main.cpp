#include <iostream>
using namespace std;

int main()
{
    double x;
    cin >> x;
    int n = (int)x;
    int c = (int)((x - n) * 100);
    cout << "NOTAS:\n";
    cout << n / 100 << " nota(s) de R$ 100.00\n";
    n %= 100;
    cout << n / 50 << " nota(s) de R$ 50.00\n";
    n %= 50;
    cout << n / 20 << " nota(s) de R$ 20.00\n";
    n %= 20;
    cout << n / 10 << " nota(s) de R$ 10.00\n";
    n %= 10;
    cout << n / 5 << " nota(s) de R$ 5.00\n";
    n %= 5;
    cout << n / 2 << " nota(s) de R$ 2.00\n";
    n %= 2;
    cout << "MOEDAS:\n";
    cout << n << " moeda(s) de R$ 1.00\n";
    cout << c / 50 << " moeda(s) de R$ 0.50\n";
    c %= 50;
    cout << c / 25 << " moeda(s) de R$ 0.25\n";
    c %= 25;
    cout << c / 10 << " moeda(s) de R$ 0.10\n";
    c %= 10;
    cout << c / 5 << " moeda(s) de R$ 0.05\n";
    c %= 5;
    cout << c << " moeda(s) de R$ 0.01\n";
    return 0;
}