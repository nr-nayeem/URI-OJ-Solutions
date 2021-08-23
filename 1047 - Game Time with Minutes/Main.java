import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int ih = scan.nextInt();
        int im = scan.nextInt();
        int fh = scan.nextInt();
        int fm = scan.nextInt();
        scan.close();
        int tm = (fh - ih) * 60 + fm - im;
        if (tm < 1) {
            tm += 1440;
        }
        System.out.printf("O JOGO DUROU %d HORA(S) E %d MINUTO(S)\n", tm / 60, tm % 60);
    }
}