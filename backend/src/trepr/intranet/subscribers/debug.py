from trepr.intranet import logger

import os


# Checa se temos uma variável de ambiente chamada DEBUG
DEBUG: bool = bool(os.environ.get("DEBUG", ""))


def debugger(event):
    if DEBUG:
        logger.info(f"Evento disparado: {event}")
