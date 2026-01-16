public class TesteTratamento {

    public static void main(String[] args){

        try {
            int numro = Integer.parseInt("abc"); //erro aqui
        } catch (NumberFormatException e) {
            System.out.println("Erro de conversão: " + e.getMessage());
        } finally {
            System.out.println("Sempre executa, com ou sem erro");
        }
    }
}
