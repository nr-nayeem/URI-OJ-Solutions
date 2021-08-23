#include <iostream>
using namespace std;

int main()
{
    int ih, im, fh, fm;
    cin >> ih >> im >> fh >> fm;
    int tm = (fh - ih) * 60 + fm - im;
    if (tm < 1)
    {
        tm += 1440;
    }
    cout << "O JOGO DUROU " << tm / 60 << " HORA(S) E " << tm % 60 << " MINUTO(S)" << endl;
    return 0;
}