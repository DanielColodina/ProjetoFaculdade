class IdadeInvalidException extends Exception {
    public IdadeInvalidException(String msg){
        super(msg);
    }
}

class Pessoa {
    private int idade;

    public Pessoa(int idade) throws IdadeInvalidException {
        if (idade < 0) {
            throw new IdadeInvalidException("Idade não pode ser negativa!");
        }
        this.idade = idade;
    }
}
public class TesteExcecao {
    public static void  main(String[] args){
        try {
            Pessoa p = new Pessoa(-5);
        } catch (IdadeInvalidException e ) {
            System.out.println("️ Erro: "+  e.getMessage());
        }
    }
}
