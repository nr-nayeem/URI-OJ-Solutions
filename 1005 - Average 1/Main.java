import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double a = scan.nextFloat();
        double b = scan.nextFloat();
        System.out.printf("MEDIA = %.5f\n", (a * 3.5 + b * 7.5) / 11.0);
        scan.close();
    }
}