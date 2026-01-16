import java.util.Arrays;
import java.util.List;

public class Lambda {

    public static void main(String[] args) {

        List<String> nomes = Arrays.asList("Ana", "Carlos", "Beatriz");
        nomes.forEach(n -> System.out.println(n));
    }
}
