package com.geds.api.controllers;

import com.geds.api.entities.Plano;
import com.geds.api.repositories.PlanoRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/planos")
public class PlanoController {

    private final PlanoRepository planoRepository;

    public PlanoController(PlanoRepository planoRepository) {
        this.planoRepository = planoRepository;
    }

    @GetMapping
    public List<Plano> listarTodos() {
        return planoRepository.findAll();
    }
}
