#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    double r;
    cin >> r;
    double pi = 3.14159;
    cout << "A=" << fixed << setprecision(4) << pi * r * r << endl;
    return 0;
}