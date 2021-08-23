#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int main()
{
    string name;
    double salary, sold_amount;
    cin >> name >> salary >> sold_amount;
    cout << "TOTAL = R$ " << fixed << setprecision(2) << salary + sold_amount * 0.15 << endl;
    return 0;
}