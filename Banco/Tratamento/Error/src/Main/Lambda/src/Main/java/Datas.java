import java.time.*;

public class Datas {
    public static void main(String[] args) {
        LocalDate hoje = LocalDate.now();
        LocalDate aniversario = LocalDate.of(2025, 9, 21);
        Period periodo = Period.between(hoje, aniversario);

        System.out.println("Hoje: " + hoje);
        System.out.println("Dias até o aniversário: " + periodo.getDays());
    }
}
