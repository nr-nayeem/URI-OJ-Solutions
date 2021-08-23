#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int num, hpm;
    double mph;
    cin >> num >> hpm >> mph;
    cout << "NUMBER = " << num << endl;
    cout << "SALARY = U$ " << fixed << setprecision(2) << hpm * mph << endl;
    return 0;
}