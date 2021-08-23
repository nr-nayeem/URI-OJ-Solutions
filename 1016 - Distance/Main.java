import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int d = scan.nextInt();
        scan.close();
        System.out.printf("%d minutos\n", d * 2);
    }
}