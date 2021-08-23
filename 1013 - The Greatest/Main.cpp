#include <iostream>
using namespace std;

int main()
{
    int a, b, c;
    cin >> a >> b >> c;
    if (a > b)
    {
        b = a;
    }
    cout << (c > b ? c : b) << " eh o maior" << endl;
    return 0;
}