{ 
  nixpkgs ? fetchTarball "https://github.com/NixOS/nixpkgs/tarball/nixos-24.05",
  pkgs ? import nixpkgs { config = {}; overlays = []; }
}:

pkgs.mkShellNoCC {
  packages = with pkgs; [
    cowsay

    bun
    nodePackages.typescript
    nodePackages.typescript-language-server
    nodePackages.prettier
    emmet-ls
  ];

  # Hook to install requirements when entering the shell
  shellHook = ''
    cowsay "Nix Shell Activated!"
  '';
}

