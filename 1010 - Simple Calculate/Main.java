import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        scan.nextInt();
        int units1 = scan.nextInt();
        double ppu1 = scan.nextDouble();
        scan.nextInt();
        int units2 = scan.nextInt();
        double ppu2 = scan.nextDouble();
        System.out.printf("VALOR A PAGAR: R$ %.2f\n", units1 * ppu1 + units2 * ppu2);
        scan.close();
    }
}