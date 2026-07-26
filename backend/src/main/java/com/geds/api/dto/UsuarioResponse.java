package com.geds.api.dto;

import com.geds.api.entities.Usuario;

import java.util.List;
import java.util.UUID;

public record UsuarioResponse(
    UUID id,
    String nome,
    String email,
    String cargo,
    String biografia,
    String urlAvatar,
    List<String> habilidades
) {
    public static UsuarioResponse from(Usuario usuario) {
        return new UsuarioResponse(
            usuario.getId(),
            usuario.getNome(),
            usuario.getEmail(),
            usuario.getCargo(),
            usuario.getBiografia(),
            usuario.getUrlAvatar(),
            usuario.getHabilidades()
        );
    }
}
