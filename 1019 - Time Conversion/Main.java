import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        scan.close();
        System.out.printf("%d:", n / 3600);
        n %= 3600;
        System.out.printf("%d:%d\n", n / 60, n % 60);
    }
}