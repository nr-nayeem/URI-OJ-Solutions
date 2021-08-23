import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double r = scan.nextDouble();
        scan.close();
        double pi = 3.14159;
        System.out.printf("A=%.4f\n", pi * r * r);
    }
}