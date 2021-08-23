#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    double r;
    cin >> r;
    cout << "VOLUME = " << fixed << setprecision(3) << r * r * r * 3.14159 * 4 / 3 << endl;
    return 0;
}