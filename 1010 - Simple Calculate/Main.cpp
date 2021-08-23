#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int code1, units1, code2, units2;
    double ppu1, ppu2;
    cin >> code1 >> units1 >> ppu1 >> code2 >> units2 >> ppu2;
    cout << "VALOR A PAGAR: R$ " << fixed << setprecision(2) << units1 *ppu1 + units2 *ppu2 << endl;
    return 0;
}