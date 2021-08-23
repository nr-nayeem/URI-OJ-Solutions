import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        scan.nextLine();
        double salary = scan.nextDouble();
        double sold_amount = scan.nextDouble();
        System.out.printf("TOTAL = R$ %.2f\n", salary + sold_amount * 0.15);
        scan.close();
    }
}