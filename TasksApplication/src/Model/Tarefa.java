package Model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

//Puxando as entidades participantes do projeto
@Entity
public class Tarefa{
    Tarefa tarefa;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long Id;
    private String Titulo;
    private String Descricao;
    private Boolean Concluido;


    //Criando os construtores
    public Tarefa(String titulo, String descricao){

        this.Descricao = descricao;
        this.Titulo = titulo;
        this.Concluido = false;

    }
    //Construtores
    public long getID(){
        return Id;
    }
    public void setId(long id){
        this.Id = id;
    }

    //Construtor do Titulo
    public String getTitulo(){
        return Titulo;
    }
    public void setTitulo (){
        this.Titulo = Titulo;
    }
    //Construtor da Descricao
    public String getDescricao(){
        return Descricao;
    }
    public void setDescricao(){
        this.Descricao = Descricao;
    }

    public Boolean getConcluido(){
        return Concluido;
    }

    //Para booleano identificamos ele dentro de um parametro para obter sua tipologia
    public void setConcluido(boolean Concluido){
        this.Concluido = Concluido;
    }
}








