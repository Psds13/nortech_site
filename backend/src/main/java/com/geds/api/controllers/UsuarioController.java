package com.geds.api.controllers;

import com.geds.api.dto.UsuarioResponse;
import com.geds.api.entities.Usuario;
import com.geds.api.repositories.ProjetoRepository;
import com.geds.api.repositories.UsuarioRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    private final UsuarioRepository usuarioRepository;
    private final ProjetoRepository projetoRepository;

    public UsuarioController(UsuarioRepository usuarioRepository, ProjetoRepository projetoRepository) {
        this.usuarioRepository = usuarioRepository;
        this.projetoRepository = projetoRepository;
    }

    @GetMapping("/me")
    public ResponseEntity<UsuarioResponse> getAutenticado(Authentication authentication) {
        return usuarioRepository.findByEmail(authentication.getName())
            .map(usuario -> ResponseEntity.ok(UsuarioResponse.from(usuario)))
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}/projetos/count")
    public ResponseEntity<Map<String, Long>> countProjetos(@PathVariable UUID id, Authentication authentication) {
        Optional<Usuario> autenticado = usuarioRepository.findByEmail(authentication.getName());
        if (autenticado.isEmpty() || !autenticado.get().getId().equals(id)) {
            return ResponseEntity.status(403).build();
        }

        return ResponseEntity.ok(Map.of("count", projetoRepository.countByProprietario_Id(id)));
    }
}
