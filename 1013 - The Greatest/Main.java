import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        int b = scan.nextInt();
        int c = scan.nextInt();
        if (a > b) {
            b = a;
        }
        System.out.printf("%d eh o maior\n", c > b ? c : b);
        scan.close();
    }
}