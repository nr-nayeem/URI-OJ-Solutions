import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double x = scan.nextDouble();
        scan.close();
        int n = (int) x;
        int c = (int) ((x - n) * 100);
        System.out.println("NOTAS:");
        System.out.printf("%d nota(s) de R$ 100.00\n", n / 100);
        n %= 100;
        System.out.printf("%d nota(s) de R$ 50.00\n", n / 50);
        n %= 50;
        System.out.printf("%d nota(s) de R$ 20.00\n", n / 20);
        n %= 20;
        System.out.printf("%d nota(s) de R$ 10.00\n", n / 10);
        n %= 10;
        System.out.printf("%d nota(s) de R$ 5.00\n", n / 5);
        n %= 5;
        System.out.printf("%d nota(s) de R$ 2.00\n", n / 2);
        n %= 2;
        System.out.println("MOEDAS:");
        System.out.printf("%d moeda(s) de R$ 1.00\n", n);
        System.out.printf("%d moeda(s) de R$ 0.50\n", c / 50);
        c %= 50;
        System.out.printf("%d moeda(s) de R$ 0.25\n", c / 25);
        c %= 25;
        System.out.printf("%d moeda(s) de R$ 0.10\n", c / 10);
        c %= 10;
        System.out.printf("%d moeda(s) de R$ 0.05\n", c / 5);
        c %= 5;
        System.out.printf("%d moeda(s) de R$ 0.01\n", c);
    }
}