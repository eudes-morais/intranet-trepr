from trepr.intranet import PACKAGE_NAME
from zope.schema.vocabulary import SimpleVocabulary

import pytest


class TestVocabEstados:
    name = f"{PACKAGE_NAME}.vocabulary.estados"

    @pytest.fixture(autouse=True)
    def _vocab(self, get_vocabulary, portal):
        self.vocab = get_vocabulary(self.name, portal)

    def test_vocabulary(self):
        assert self.vocab is not None
        assert isinstance(self.vocab, SimpleVocabulary)

    @pytest.mark.parametrize(
        "token, value",
        [["PR", "Paraná"], ["SP", "São Paulo"], ["DF", "Distrito Federal"]],
    )
    def test_token(self, token, value):
        # breakpoint()
        term = self.vocab.getTermByToken(token)
        assert term.title == value
