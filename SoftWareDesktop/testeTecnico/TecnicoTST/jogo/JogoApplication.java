package jogo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SpringBootApplication
public class JogoApplication {
    public static void main(String[] args) {
        SpringApplication.run(JogoApplication.class, args);
    }

    // ===== Modelos =====
    enum Gesto {
        PEDRA,
        PAPEL,
        TESOURA;

        public List<Gesto> ganhaDe() {
            return switch (this) {
                case PEDRA -> List.of(TESOURA);
                case PAPEL -> List.of(PEDRA);
                case TESOURA -> List.of(PAPEL);
            };
        }
    }

    static class Mao {
        private Gesto gesto;

        public Mao() {}
        public Mao(Gesto gesto) { this.gesto = gesto; }

        public Gesto getGesto() { return gesto; }
        public void setGesto(Gesto gesto) { this.gesto = gesto; }
    }

    enum Resultado {
        GANHA,
        PERDE,
        EMPATA
    }

    // ===== Service =====
    @Service
    static class JogoService {
        public Resultado jogar(Mao jogador1, Mao jogador2) {
            Gesto g1 = jogador1.getGesto();
            Gesto g2 = jogador2.getGesto();

            if (g1 == g2) return Resultado.EMPATA;
            if (g1.ganhaDe().contains(g2)) return Resultado.GANHA;
            return Resultado.PERDE;
        }
    }

    // ===== Controller =====
    @RestController
    @RequestMapping("/jogo")
    static class JogoController {
        private final JogoService service;

        public JogoController(JogoService service) {
            this.service = service;
        }

        // Exemplo: GET http://localhost:8080/jogo/jogar?j1=PEDRA&j2=TESOURA
        @GetMapping("/jogar")
        public Resultado jogar(@RequestParam Gesto j1, @RequestParam Gesto j2) {
            return service.jogar(new Mao(j1), new Mao(j2));
        }
    }
}
