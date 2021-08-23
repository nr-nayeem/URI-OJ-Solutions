import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double r = scan.nextDouble();
        scan.close();
        System.out.printf("VOLUME = %.3f\n", r * r * r * 3.14159 * 4 / 3);
    }
}